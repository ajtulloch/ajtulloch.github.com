---
title: Getting Started with Tufte-LaTeX
layout: post
categories: mathematics finance

---

It seems that almost everyone in a technical field has heard of [Edward Tufte][0], whose [books][tufte1] [on][tufte2] [data][tufte3] [visualisation][tufte4] are justifiably regarded as masterpieces.  

While these books are exceptional works on data visualisation, they are also masterfully typeset.  Thankfully, it is relatively simple to apply the typographic sense of Tufte to your everday LaTeX documents, through Tufte-LaTeX.

[Tufte-Latex][1] is a great LaTeX class for jazzing up your technical documents.  As a first example, have a look on the [examples][2] available from the Tufte-LaTeX homepage, or have a look at [this example][3] ([source][tl-pmh3]) I created from my [AMS-TeX notes][4] ([source][ams-pmh3])  on Functional Analysis.

As we can see, this class can really improve the reading experience for users of your technical documents, and break up the Computer Modern/AMS monotony that users of the ArXiV would be far too familiar with.  So let's get started!

### Installation

Installation is fairly simple, extract the provided `.zip` file into your LaTeX distribution's library folder (mine was `~/Library/texmf/tex/latex`).  You also require the following list of packages (although these are typically bundled with your LaTeX distribution):

* `chngpage`
* `fancyhdr`
* `fontenc`
* `geometry`
* `hyperref`
* `natbib`
* `bibentry`
* `optparams`
* `paralist`
* `placeins`
* `ragged2e`
* `setspace`
* `textcase`
* `textcomp`
* `titlesec`
* `titletoc`
* `xcolor`
* `xifthen`

To test that the package is correctly installed with it's dependencies, try compiling one of the sample documents contained in the `.zip` file.

### Usage

I'll now show you how to convert an existing AMS document into a corresponding Tufte-LaTeX document.  The key components requiring change are the preamble, the start of new paragraphs, and various `note` environments and other asides.

#### Preamble

Consider a typical AMSTeX preamble, as below:

{% highlight latex %}
\documentclass[10pt, oneside, reqno]{amsbook}
\usepackage{geometry, setspace, graphicx}
\usepackage{enumerate, amssymb}
\onehalfspacing

% AMS Theorem Setup
% User Macro Setup
\usepackage{hyperref}

\title{PMH3 - Functional Analysis}
\author{Andrew Tulloch}

\begin{document}
\maketitle 
\tableofcontents 
\clearpage

\chapter{Banach Spaces and Linear Operators}
...
{% endhighlight %}

We replace this with the following:

{% highlight latex %}
\documentclass[justified]{tufte-book}

\hypersetup{colorlinks}
\setcounter{secnumdepth}{1} 
% turn on numbering for parts and chapters 

\usepackage{amsthm, amsmath, amssymb}
\usepackage{setspace, graphicx, enumerate}


% For nicely typeset tabular material
\usepackage{booktabs}

% For graphics / images
\usepackage{graphicx}
\usepackage{fancyvrb}
\fvset{fontsize=\normalsize}
\usepackage{xspace}
\title{Functional Analysis
      \thanks{Thanks to Edward R.~Tufte for his inspiration.}}
\author{Andrew Tulloch}
\publisher{School of Mathematics and Statistics\\
           The University of Sydney}


\usepackage{units}


\begin{document}
\frontmatter
\maketitle
\tableofcontents
\cleardoublepage
\mainmatter

\chapter{Banach Spaces and Linear Operators}
...
{% endhighlight %}

All that is required are a few changes to the `documentclass` declaration, and a few extra packages to load.

#### Margin and Side Notes

Tufte-LaTeX encourages the use of the wide margin to place asides and other notes that enhance the main text.  To implement these, the class provides the `marginnote` and `sidenote` commands, which can be used anywhere in the main text.  These commands differ in that the `marginnote` command does not place a footnote-style number at the corresponding place in the text, whereas the `sidenote` command does.

I typically use `sidenote` by default, and use `marginnote` whenever the content I am placing in the sidebar is numbered already, e.g. an exercise environment.  

As an example, we can replace the following block of code:
{% highlight latex %}
\begin{note}
    If $x_n \rightarrow x,y_n \rightarrow y$, then
    $\langle x_n, y_n \rangle \rightarrow \langle x, y \rangle.$
\end{note}
{% endhighlight %}

with 

{% highlight latex %}
\sidenote{
    If $x_n \rightarrow x,y_n \rightarrow y$, then
    $\langle x_n, y_n \rangle \rightarrow \langle x, y \rangle.$
}
{% endhighlight %}

and similarly we replace 

{% highlight latex %}
\begin{exer}
    If $T_1, \dots, T_n \in \mathcal L(X)$ which commute with
    each other, then $T_1 \dots T_n$ is invertible if and only
    if the individual elements are invertible.  
\end{exer}
{% endhighlight %}

with 

{% highlight latex %}
\marginnote{
  \begin{exer}
    If $T_1, \dots, T_n \in \mathcal L(X)$ which commute with
    each other, then $T_1 \dots T_n$ is invertible if and only
    if the individual elements are invertible.  
  \end{exer}
}
{% endhighlight %}

#### Paragraph Starts

The Tufte-LaTeX package provides a useful command, `\newthought`, that mimicks the style of the opening words of a chapter in Tufte's publications.  It converts the selected words into a properly spaces small-caps format, and looks excellent.  It should be used sparingly, at the start of a paragraph following a new section or chapter.  

For example,   
{% highlight latex %}
\chapter{Compact Operators}

\newthought{We now turn to} compact operators.  In general,
calculating $\sigma(T)$ is difficult, but for compact
operators on a complex Banach space, we have a fairly explicit
theory.
{% endhighlight %}

### Summary

And there you have it!  With these quick changes, it becomes simple to convert your staid AMS-TeX documents to pieces of art.  Give it a try and see how you go!


[0]: http://en.wikipedia.org/wiki/Edward_Tufte "Edward Tufte"
[1]: http://code.google.com/p/tufte-latex/ "Tufte-LaTeX"
[2]: http://tufte-latex.googlecode.com/files/sample-book-3.5.0.pdf "Tufte-LaTeX Sample"
[3]: /PDFs/Tufte-Latex.pdf
[4]: /PDFs/AMSTex.pdf
[tufte1]: http://www.edwardtufte.com/tufte/books_vdqi "The Visual Display of Quantitative Information"
[tufte2]: http://www.edwardtufte.com/tufte/books_ei "Envisioning Information"
[tufte3]: http://www.edwardtufte.com/tufte/books_visex "Visual Explanations"
[tufte4]: http://www.edwardtufte.com/tufte/books_be "Beautiful Evidence" 

[tl-pmh3]: Files/Tufte-LatexPMH3LectureNotes.tex
[ams-pmh3]: Files/PMH3LectureNotes.tex







