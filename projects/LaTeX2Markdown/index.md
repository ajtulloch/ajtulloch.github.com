---

title: LaTeX2Markdown Demonstration
layout: project
mathjax: true

---

The following document was generated entirely by the [LaTeX2Markdown][lt2md] tool.  See below for the generated Markdown and the source LaTeX.  The [LaTeX source][ex-tex], [Markdown source][ex-md], and [PDF][ex-pdf] (generated from the LaTeX document) are also available. 

[lt2md]: https://github.com/ajtulloch/LaTeX2Markdown
[ex-md]: files/converted_latex_sample.md
[ex-tex]: files/latex_sample.tex
[ex-pdf]: files/latex_sample.pdf

<hr>

##  Usage


###  Simple Examples


This section introduces the usage of the LaTeX2Markdown tool, showing an example of the various environments available.  

#### Theorem 1 (Euclid, 300 BC)

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

It is easy to show by induction that
\[ F_m - 2 = F_0 F_1 \dots F_{m-1}. \]
This means that if $d$ divides both $F_n$ and $F_m$ (with $n < m$), then $d$ also divides $F_m - 2$.  Hence, $d$ divides 2.  But every Fermat number is odd, so $d$ is necessarily one.  This proves the lemma.


We can now provide a solution to the exercise.

#### Theorem 2 (Goldbach, 1750)

> There are infinitely many prime numbers.


#### Proof

Choose a prime divisor $p_n$ of each Fermat number $F_n$.  By the lemma we know these primes are all distinct, showing there are infinitely many primes.


###  Available environments


We can format *italic text*, **bold text**, and `code` blocks.



1.  A numbered list item
1.  Another numbered list item




*  A bulleted list item
*  Another bulleted list item


#### Theorem 3

> This is a theorem.  It contains an `align` block.  All math environments supported by MathJaX should work with LaTeX - a full list is available on the MathJaX homepage.
> 
> Maxwell's equations, differential form.
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


#### Proposition 1

> This is a proposition


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

\theoremstyle{plain}% default 
\newtheorem{thm}{Theorem}[section] 
\newtheorem{lem}[thm]{Lemma} 
\newtheorem{prop}[thm]{Proposition} 
\newtheorem{exer}[thm]{Exercise} 

\title{LaTeX2Markdown Examples}
\author{Andrew Tulloch}
\begin{document}

% LaTeX2Markdown IGNORE
\maketitle
% LaTeX2Markdown END

\section{Simple Examples}

This section introduces the usage of the LaTeX2Markdown tool, showing an example of the various environments available.  

\begin{thm}[Euclid, 300 BC]
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
    It is easy to show by induction that 
    \[ F_m - 2 = F_0 F_1 \dots F_{m-1}. \]
    This means that if $d$ divides both $F_n$ and $F_m$ (with $n < m$), then $d$ also divides $F_m - 2$.  Hence, $d$ divides 2.  But every Fermat number is odd, so $d$ is necessarily one.  This proves the lemma.
\end{proof}

We can now provide a solution to the exercise.

\begin{thm}[Goldbach, 1750]
    There are infinitely many prime numbers.
\end{thm}

\begin{proof}
    Choose a prime divisor $p_n$ of each Fermat number $F_n$.  By the lemma we know these primes are all distinct, showing there are infinitely many primes.
\end{proof}

\section{Demonstration of the environments}

We can format \emph{italic text}, \textbf{bold text}, and \texttt{code} blocks.

\begin{enumerate}
    \item A numbered list item
    \item Another numbered list item
\end{enumerate}

\begin{itemize}
    \item A bulleted list item
    \item Another bulleted list item
\end{itemize}

\begin{thm}
    This is a theorem.  It contains an \texttt{align} block.  
    
    All math environments supported by MathJaX should work with LaTeX - a full list is available on the MathJaX homepage.
    
    Maxwell's equations, differential form.
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

\begin{prop}
    This is a proposition
\end{prop}

\begin{proof}
    This is a proof.
\end{proof}

\begin{lstlisting}
This is a code listing.
One line of code
Another line of code
\end{lstlisting}

\end{document}
{% endhighlight %}



