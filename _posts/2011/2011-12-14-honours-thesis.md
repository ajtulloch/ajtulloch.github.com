---
title: Honours Thesis
layout: default
categories: mathematics credit-risk

---

This year, I completed an honours thesis in Applied Mathematics at the University of Sydney.  The thesis focused on the development of univariate and multivariate intensity models for credit risk.

#### Abstract

> In this thesis, we examine the use of intensity models in modelling credit risk. In this approach, we assume the existence of a stochastic process $\lambda\_t$ representing the instantaneous default probability of an obligor. We then specify various Levy processes for the intensity process  $\lambda\_t$, with particular emphasis on non-Gaussian Ornstein-Uhlenbeck process, derive various theoretical properties of these models, and calibrate these models to credit market data. We find that Gamma-OU and Inverse Gaussian-OU Levy processes can be effectively applied in an intensity context, and provide several advantages over conventional Poisson processes.
> 
>
>
> We then extend the intensity approach to modelling multivariate credit derivatives. We discuss various proposed multivariate intensity models, and extend several copula models using our candidate Levy processes to derive our marginal distribution. Our empirical results are then compared and contrasted with previous results in the literature. Again, we show that non-Gaussian OU processes offer plausible correlation sensitivities and VaR profiles for several multivariate credit derivatives.


#### Implementation

There was a significant implementation component involved in this thesis.  We implemented several stochastic intensity models for univariate CDS calibration, and developed a copula library for use with Monte Carlo simulation to create pricing tools for multivariate credit derivatives.  

Python was the language of choice, due to the excellent scientific computing libraries of [SciPy](http://scipy.org) and [NumPy](http://numpy.org), and the graphical capabilities of [Matplotlib](http://matplotlib.sourceforge.net).

All code is available on [GitHub](https://github.com/ajtulloch/IntensityCreditModels).

#### Further Information

Please see the [full thesis](/PDFs/AndrewTulloch-HonoursThesis.pdf).

