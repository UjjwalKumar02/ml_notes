import React, { useState } from 'react'
import Content from '../content/Content'
import slr from '../../../public/slr.png'
import SLRImplementation from '../implement-pages/SLRImplementation'

const SLR = () => {
  const [showImplementation, setShowImplementation] = useState(false)

  const handleImplementationClick = () => {
    setShowImplementation(!showImplementation)
  }

  return (
    <>
      {showImplementation && <SLRImplementation handleImplementationClick={handleImplementationClick}/>}
      {showImplementation === false && (
        <Content
        title={"Simple Linear Regression"}
  
        def={`Simple linear regression is a statistical method used to model the relationship between two variables. 
  
          The goal is to find the best-fitting straight line that describes the relationship between a dependent variable (the one you're trying to predict) and an independent variable (the one you're using to make predictions).`}
        
        handleImplementationClick = {handleImplementationClick}
  
        features={`The equation for simple linear regression is : Y = b0 + b1.X 
  
          The goal is to find the line that best fits the data points, minimizing the difference between the actual data points and the predicted values. 
          This is typically done using a method called least squares, which minimizes the sum of the squared differences between the observed values and the predicted values.`}
  
        img={slr}
  
        code={`from sklearn.linear_model import LinearRegression
          model = LinearRegression()
          model.coef_
          model.intercept_
          
  
          # OLS(Ordinary Least Square)
  
          import statsmodels.api as sm
          model_sm = sm.OLS()`}
  
        params={`No such params`}
  
        uses={`Use simple linear regression when you have one independent variable and want to predict or understand the relationship between it and the dependent variable. 
  
        It works well when you believe the relationship between the two variables is linear and you want to quantify the strength of that relationship.`}
  
        adv={`<> It’s easy to understand and implement.
          <> The coefficients (slope and intercept) directly show how the independent variable influences the dependent variable.
          <> It is computationally efficient and can be quickly applied to small and large datasets.
          <> Good for Linearly Related Data.
          <> With just one predictor variable, there is less chance of overfitting the model.
          <> It serves as a foundation for more advanced regression models, like multiple linear regression or polynomial regression.`}
        
        disadv={`<> It only works well when the relationship between the variables is truly linear.
          <> Outliers can significantly affect the slope of the regression line and lead to misleading results.
          <> Simple linear regression can only handle a single independent variable.
          <> The model assumes constant variance of errors across all levels of the independent variable. If the variance changes (heteroscedasticity), the model’s predictions may be unreliable.
          <> Cannot Capture Complex Relationships.
          <> It assumes that the data points are independent.`}
  
          notuse={`>_ Non-linear Relationships.
            >_ Multiple Predictors.
            >_ Outliers.
            >_ Violation of Assumptions : Linearity, Independence of Errors(residuals (errors) must be independent), Normality(Residuals should be normally distributed), Homoscedasticity(variance of residuals should be constant across all values of the independent variable.)
            If these assumptions are violated, the model may give biased or inaccurate results.
  
            >_ Autocorrelation : In cases of time series data or spatial data, where data points are correlated with previous or nearby ones, the independence assumption is violated.
  
            >_ High Multicollinearity: If you are in a multiple regression scenario, but the independent variables are highly correlated with each other.`}
        />
      )}
    </>
  )
}

export default SLR