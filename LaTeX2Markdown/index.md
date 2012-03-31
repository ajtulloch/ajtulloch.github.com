---
title: LaTeX2Markdown
layout: post
mathjax: true

---

The following document was generated entirely by the LaTeX2Markdown tool.  See below for the generated Markdown and the source LaTeX.

<hr>

###  Example Section

#### Theorem 1 (Euclid)

> There are infinitely many primes.


#### Proof

Suppose that $p_1 < p_2 < \dots < p_n$ are all of the primes. Let $P = 1 + \prod_{i=1}^n p_i$ and let $p$ be a prime dividing $P$.

Then $p$ can not be any of $p_i$, for otherwise $p$ would divide the difference $P - \left(\prod_{i=1}^n p_i \right) - 1$, which is impossible. So this prime $p$ is still another prime, and $p_1, p_2, \dots p_n$ cannot be all of the primes.


#### Exercise 1

> Give an alternative proof that there are an infinite number of prime numbers.


To solve this exercise, we first introduce the following lemma.
#### Lemma 1

> The Fermat numbers $F_n = 2^{2^{n}} + 1$ are pairwise relatively prime.


#### Proof

It is easy to show by induction that \[
F_m - 2 = F_0 F_1 \dots F_{m-1}.
\]  This means that if $d$ divides both $F_n$ and $F_m$ (with $n < m$), then $d$ also divides $F_m - 2$.  Hence, $d$ divides 2.  But every Fermat number is odd, so $d$ is necessarily one.  This proves the lemma.


We can now provide a solution to the exercise.

#### Theorem 2 (Goldbach's proof of the infinitude of the primes)

> There are infinitely many prime numbers.


#### Proof

Choose a prime divisor $p_n$ of each Fermat number $F_n$.  By the lemma we know these primes are all distinct, showing there are infinitely many primes.


###  LaTeX examples


We can format *italic text*, **bold text**, and `code` blocks.



1. A list item
1. Another list item


#### Theorem 3

> This is a theorem.  It contains an `align` block.
> 
> \begin{align}
> \nabla \cdot \mathbf{E} &= \frac {\rho} {\varepsilon_0} \\\\
> \nabla \cdot \mathbf{B} &= 0 \\\\
> \nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}} {\partial t} \\\\
> \nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}} {\partial t} \\\\
> \end{align}


#### Theorem 4 (Theorem name)

> This is a named theorem.


#### Lemma 2

> This is a lemma.


#### Proof

This is a proof.

    This is a code listing.

<hr>

### LaTeX Code

The following is the entire LaTeX document used to generate this post.

{% highlight latex %}
\documentclass[12pt]{amsart}
\usepackage{amsthm, amsmath, amssymb}
\usepackage{setspace}
\usepackage{listings}
\onehalfspacing                 

\usepackage[usenames, dvipsnames]{color}
\definecolor{graphblue}{RGB}{52, 138, 189}
\definecolor{graphpurple}{RGB}{122, 104, 166}

\theoremstyle{plain}% default 
\newtheorem{thm}{Theorem}[section] 
\newtheorem{lem}[thm]{Lemma} 
\newtheorem{prop}[thm]{Proposition} 
\newtheorem{exer}[thm]{Exercise} 

\lstset{
language=bash,
stepnumber=0,
showspaces=false,
breaklines=true,
basicstyle=\ttfamily\scriptsize,
frame=single,
commentstyle=\scriptsize,
prebreak=\raisebox{0ex}[0ex][0ex]{\ensuremath{\hookleftarrow}},
showstringspaces=false,
showtabs=false,
identifierstyle=\ttfamily,
commentstyle=\color{graphpurple},
keywordstyle=\color{graphblue},
tabsize=2
}

\title{Introduction to LaTeX2Markdown}
\author{Andrew Tulloch}
\begin{document}

% LaTeX2Markdown IGNORE
\maketitle
% LaTeX2Markdown END

\section{Example Section}
\begin{thm}[Euclid]
    There are infinitely many primes.
\end{thm}

\begin{proof}
    Suppose that $p_1 < p_2 < \dots < p_n$ are all of the primes. Let $P = 1 + \prod_{i=1}^n p_i$ and let $p$ be a prime dividing $P$.
    
    Then $p$ can not be any of $p_i$, for otherwise $p$ would divide the difference $P - \left(\prod_{i=1}^n p_i \right) - 1$, which is impossible. So this prime $p$ is still another prime, and $p_1, p_2, \dots p_n$ cannot be all of the primes.
\end{proof}

\begin{exer}
    Give an alternative proof that there are an infinite number of prime numbers.
\end{exer}

To solve this exercise, we first introduce the following lemma.
\begin{lem}
    The Fermat numbers $F_n = 2^{2^{n}} + 1$ are pairwise relatively prime.
\end{lem}

\begin{proof}
    It is easy to show by induction that \[
    F_m - 2 = F_0 F_1 \dots F_{m-1}.
\]  
    This means that if $d$ divides both $F_n$ and $F_m$ (with $n < m$), then $d$ also divides $F_m - 2$.  Hence, $d$ divides 2.  But every Fermat number is odd, so $d$ is necessarily one.  This proves the lemma.
\end{proof}

We can now provide a solution to the exercise.

\begin{thm}[Goldbach's proof of the infinitude of the primes]
    There are infinitely many prime numbers.
\end{thm}

\begin{proof}
    Choose a prime divisor $p_n$ of each Fermat number $F_n$.  By the lemma we know these primes are all distinct, showing there are infinitely many primes.
\end{proof}

\section{LaTeX examples}

We can format \emph{italic text}, \textbf{bold text}, and \texttt{code} blocks.

\begin{enumerate}
    \item A list item
    \item Another list item
\end{enumerate}

\begin{thm}
    This is a theorem.  It contains an \texttt{align} block.
    
    \begin{align*}
        \nabla \cdot \mathbf{E} &= \frac {\rho} {\varepsilon_0} \\
        \nabla \cdot \mathbf{B} &= 0 \\
        \nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}} {\partial t} \\
        \nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}} {\partial t} \\
    \end{align*}
\end{thm}

\begin{thm}[Theorem name]
    This is a named theorem.
\end{thm}

\begin{lem}
    This is a lemma.
\end{lem}

\begin{proof}
    This is a proof.
\end{proof}

\begin{lstlisting}
This is a code listing.
\end{lstlisting}
\end{document}
{% endhighlight %}



