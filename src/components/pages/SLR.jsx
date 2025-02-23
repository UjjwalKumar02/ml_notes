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
  
        uses={`>_ When you have one independent variable and want to predict or understand the relationship between dependent and independent variables. 
  
        >_ When you believe the relationship between the two variables is linear.`}
  
        adv={`<> Good for Linearly Related Data.
          <> It’s easy to understand and implement.
          <> With just one predictor variable, there is less chance of overfitting the model.
          <> It is computationally efficient and can be quickly applied to small and large datasets.
          <> The coefficients (slope and intercept) directly show how the independent variable influences the dependent variable.`}
        
        disadv={`<> Only handle a single independent variable.
          <> Cannot Capture Complex Relationships.
          <> Assumes that the data points are independent.
          <>  Works well when relationship between the variables is truly linear.
          <> Outliers can significantly affect the slope of the regression line and lead to misleading results.
          <> The model assumes constant variance of errors across all levels of the independent variable. If the variance changes (heteroscedasticity), the model’s predictions may be unreliable.`}
  
          notuse={`>_ Outliers.
            >_ Multiple Predictors.
            >_ Non-linear Relationships.
            >_ High Multicollinearity: In a multiple regression scenario, independent variables are highly correlated with each other.
  
            >_ Autocorrelation : In cases of time series data or spatial data, where data points are correlated with previous or nearby ones, the independence assumption is violated.
  
            >_ Violation of Assumptions : Linearity, Independence of Errors(residuals (errors) must be independent), Normality(Residuals should be normally distributed), Homoscedasticity(variance of residuals should be constant across all values of the independent variable.)
            If these assumptions are violated, the model may give biased or inaccurate results.`}
        />
      )}
    </>
  )
}

export default SLR