import React from 'react'
import Content from '../content/Content'
import mlr from '../../../public/mlr.jpg'

const MLR = () => {
  return (
    <Content
    title={"Multiple Linear Regression"}

    def={`Multiple linear regression is a statistical technique used to model the relationship between one dependent variable (also called the target variable) and two or more independent variables (predictors or features). It's an extension of simple linear regression.

    In multiple linear regression, you try to find the best-fitting linear relationship between the dependent variable and the multiple independent variables.`}

    features={`The formula for multiple linear regression is: Y = B0 + B1.X1 + B2.X2 + ... + Bn.Xn + e
      
    Where:
    Y => dependent variable.
    X1, X2, ..., Xn => independent variables (predictors).
    B0 => intercept (value of Y when all X's are zero).
    B1, B2, ..., Bn => coefficients (weights) for each independent variable (represent the change in Y for unit change in corresponding X.)
    e => error term (difference between predicted and actual values of Y).`}

    img={mlr}

    code={`from sklearn.linear_model import LinearRegression
      model = LinearRegression()
      model.coef_
      model.intercept_
      

      # OLS(Ordinary Least Square)

      import statsmodels.api as sm
      model_sm = sm.OLS()`}

    params={`No such params`}

    uses={`Multiple linear regression is used when you want to predict a continuous outcome based on two or more independent variables. It's best suited for situations where:

      >_ You have multiple predictors influencing a target variable.
      >_ The relationship between the predictors and the target is assumed to be linear.
      >_ You need to understand how each predictor impacts the target, either for prediction or analysis.
      >_ You want to control for confounding variables.(means accounting for other variables that might influence both independent and dependent variables, which could otherwise lead to misleading or biased results.)`}

    adv={`<> Simple and Interpretable.
      <> Can capture interactions between predictors.
      <> Provides reliable predictions if the data is linear.
      <> Flexible : Useful for both prediction and understanding relationships between variables.
      <> Handles Multiple Predictors : Allows analysis of multiple factors affecting the outcome.`}
    
    disadv={`<> Assumes Linearity.
      <> Sensitive to Outliers.
      <> Including too many variables can lead to overfitting.
      <> Multicollinearity : Highly correlated predictors can make the model unreliable.
      <> Assumes Independent Errors and violations of it (e.g., in time series) can bias results.
      <> Homoscedasticity : Assumes constant error variance; changing variance (heteroscedasticity) affects accuracy.`}

      notuse={`>_ When predictors are highly correlated with each other.
        >_ If the relationship between predictors and the target is non-linear.
        >_ If your data contains extreme outliers that could distort the model.
        >_ Heteroscedasticity: When the variance of errors is not constant across the data.`}
    />
  )
}

export default MLR