---

title: Honours Thesis
layout: default
categories: mathematics credit-risk
---

I recently completed an Honours thesis in Applied Mathematics at the University of Sydney.  The thesis was focused on credit risk models, and sought to develop and assess new stochastic intensity models.

These topics will be discussed in later posts.  

#### Abstract

In this thesis, we examine the use of intensity models in modelling credit risk. In this approach, we assume the existence of a stochastic process $\lambda\_t$ representing the instantaneous default probability of an obligor.  We then specify various Levy processes for the intensity process $\lambda\_t$, with particular emphasis on non-Gaussian Ornstein-Uhlenbeck process, derive various theoretical properties of these models, and calibrate these models to credit market data.  We find that Gamma-OU and Inverse Gaussian-OU Levy processes can be effectively applied in an intensity context, and provide several advantages over conventional Poisson processes.   

We then extend the intensity approach to modelling multivariate credit derivatives.  We discuss various proposed multivariate intensity models, and extend several copula models using our candidate Levy processes to derive our marginal distribution.  Our empirical results are then compared and contrasted with previous results in the literature.  Again, we show that non-Gaussian OU processes offer plausible correlation sensitivities and VaR profiles for several multivariate credit derivatives.

#### Further Information

Please see the [full thesis](/PDFs/AndrewTulloch-HonoursThesis.pdf).

#### Code

The thesis contained thorough implementations of all theoretical models described.  The language of choice was Python, due to its strong scientific computation libraries ([SciPy](http://scipy.org) and [NumPy](http://numpy.org/)), along with an excellent data visualisation library ([matplotlib](http://matplotlib.sourceforge.net/)).  

All code developed in the course of the thesis is available on [GitHub](https://github.com/ajtulloch/IntensityCreditModels).      




