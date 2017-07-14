var fs = require('fs');
var toMarkdown = require('to-markdown');
var glob = require('glob');
var most = require('most');
var Stream = require('most').Stream;

const fromNode = f => function (...args) {
    return new Stream(new NodeCallback(f, this, args));
};

const nodeCallback = (sink, scheduler) => function (e, ...args) {
    if(e != null) {
        return sink.error(scheduler.now(), e);
    }

    sink.event(scheduler.now(), args.length < 2 ? args[0] : args);
    sink.end(scheduler.now(), undefined);
};

class NodeCallback {
    constructor (f, context, args) {
        this.f = f;
        this.context = context;
        this.args = args;
    }

    run (sink, scheduler) {
        this.f.call(this.context, ...this.args, nodeCallback(sink, scheduler));
    }
}

var glob$ = fromNode(glob);
var readFile$ = fromNode(fs.readFile);
var writeFile$ = fromNode(fs.readFile);

fromNode(glob)("**/readme.html")
    .flatMap(most.from)
    .flatMap(x => readFile$(x, 'utf8').map(contents => ({fileName: x, contents})))
    .map(data => {
        let x = data.contents.replace("<blockquote>", "").replace("</blockquote>", "");
        let md = toMarkdown(x, {gfm: true});
        data.markdown = md;
        return data;
    })
    .forEach(x => fs.writeFileSync(x.fileName.replace('html', 'md'), x.markdown))
    .catch(console.log);
