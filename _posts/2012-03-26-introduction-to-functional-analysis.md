---

title: An Introduction to Functional Analysis
layout: post
categories: mathematics statistics
mathjax: true
intro: |
    Functional analysis is one of the most beautiful areas of mathematics, with vast applications to pure mathematics, applied mathematics, statistics, computer science, physics, and more.  Functional analysis allows us to extend the basic tools of linear algebra to vastly more complex spaces, and has produced some wonderful results.

    We begin with an introduction to functional analysis, starting from a basic knowledge of linear algebra and analysis.

---

Functional analysis is one of the most beautiful areas of mathematics, with vast applications to pure mathematics, applied mathematics, statistics, computer science, physics, and more.  Functional analysis allows us to extend the basic tools of linear algebra to vastly more complex spaces, and has produced some wonderful results.

We begin with an introduction to functional analysis, starting from a basic knowledge of linear algebra and analysis.

### Introduction to Vector Spaces

A vector space is one of the most fundamental structures in mathematics.  The space $\mathbb{R}$ of real numbers over itself, and the space $\mathcal{C}(\mathbb{R})$ of continuous functions on the real numbers are common examples of vector spaces.  

Formally, a vector space is a set $V$ of elements, known as *vectors*, over a field $F$, known as the *scalars*, together with two binary operations (vector addition and scalar multiplication) that satisfy the usual rules that we would expect.  

#### Norms, Metrics, and Cauchy Sequences

Vector spaces may be endowed with a *norm*, forming a *normed vector space*.  A norm is a function that represents the notion of a *length* of a vector.  Formally, a norm on $V$ is a function $\| \cdot \|: X \rightarrow \mathbb{R}$ satisfying the following properties:

1. Every positive vector has positive length, $\| v \| \geq 0$ with equality if and only if $v = 0$. 
2. Scaling a vector scales it's length, $\| \alpha v \| = |\alpha| \| v \|$ for all $\alpha \in F, v \in V$.
3. The norm satisfies the triangle inequality, $\| u + v \| \leq \| u \| + \| v \|$ for all $u, v \in V$.

We call the pair $(V, \| \cdot \|)$ a *normed vector space*.  Notice that given a norm on a vector space, we can define some notion of distance - the distance between $u$ and $v$ is given as $\| u - v \|$. If we check the properties of the norm, we see that this obeys the various properties we would expect a distance function to have (the distance between two vectors is greater than zero, except when they are equal, in which case the distance is zero, etc.).  This function $d(u, v) = \| u - v\|$ then defines a *metric* on our vector space $V$.  The pair $(V, d)$ is known as a *metric space*.  

With the notion of a metric defined, we can now discuss issues of convergence in this metric space.  A key property of a metric space is that of *completeness*, which captures the intuitive notion of having "no points missing".  Formally, a metric space is complete if every Cauchy sequence converge in $M$. 

Consider an infinite sequence $(v_i) = v_1, v_2, v_3, \dots$ of elements of a metric space $(V, d)$.  These elements are said to *converge* to some element $v$ if for any $\epsilon > 0$, there exists $N$ such that $d(v_n, v) < \epsilon$ for all $n > N$.  That is, a sequence converges to an element if all elements are arbitrarily close to that element after a certain point.

A related property of a sequence is known as the *Cauchy* property.  A sequence of elements $(v_i)$ is *Cauchy* if the elements become arbitrarily close to each other as the sequence progresses.  That is, if for any $\epsilon > 0$, there exists $N$ such that $d(v_n, v_m) < \epsilon$ for all $n, m > N$.  It is easy to show (using the triangle inequality) that every convergent sequence is Cauchy, but not the other way around.

If the terms of a sequence are arbitrarily close to each other, doesn't that mean that the sequence would converge to a limit?  Not necessarily.  The textbook example is the metric space of rational numbers $\mathbb{Q}$.  It is easy to construct a Cauchy sequence of rational numbers that approaches an irrational number, say $\sqrt{2}$.  For example, consider the sequence $(1, 1.4, 1.41, 1.414, \dots)$, the sequence of successive decimal approximations to $\sqrt{2}$.  This is a Cauchy sequence of rational numbers (try proving this!) that does not converge to an element of $\mathbb{Q}$.

The existence of Cauchy sequences in $\mathbb{Q}$ that do not converge in $\mathbb{Q}$ implies a fundamental property of the rational numbers - they are *incomplete*.  If we "fill in all the holes" - that is, we append all the limit points of Cauchy sequences in $\mathbb{Q}$, modulo some details, we obtain a space that is *complete* - that is, a space where all Cauchy sequences converge.  You may know this space by another name - it is the set $\mathbb{R}$ of real numbers!

Formally, a complete metric space is a space where every Cauchy sequence converges to an element in the space.  Finally, we obtain the definition of a fundamental object of study in functional analysis, drawing in all the strands of this post - the *Banach space*.  A Banach space is simply a *complete*, *normed*, *vector space*.

Next post, we'll have a look at Banach spaces, and see how they can be used.
