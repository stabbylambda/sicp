#lang sicp

; 1.1.1
486
(- 1000 334)
(* 5 99)
(/ 10 5)
(+ 2.7 10)
(+ 21 35 12 7)
(* 25 4 12)
(+ (* 3 5) (- 10 6))

(+ (* 3 (+ (* 2 4) (+ 3 5))) (+ (- 10 7) 6))
(+ (* 3
      (+ (* 2 4)
         (+ 3 5)))
   (+ (- 10 7)
      6))
; 1.1.2
(define size 2)

size

(* 5 size)

(define pi 3.14159)
(define radius 10)

(* pi (* radius radius))

(define circumference (* 2 pi radius))

circumference

; 1.1.3
(* (+ 2 (* 4 6)) (+ 3 5 7))

; 1.1.4
(define (square x) (* x x))
(square 21)
(square (+ 2 5))
(square (square 3))


(define (sum-of-squares x y)
  (+ (square x) (square y)))

(define (f a)
  (sum-of-squares (+ a 1) (* a 2)))

(f 5)

; 1.1.5


(f 5)

(sum-of-squares (+ 5 1) (* 5 2))

(+ (square 6) (square 10))
(+ (* 6 6) (* 10 10))
(+ 36 100)
136

; 1.1.6
(define (abs x)
  (cond ((> x 0) x)
        ((= x 0) 0)
        ((< x 0) (- x))))
