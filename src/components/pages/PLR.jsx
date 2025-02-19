import React from 'react'
import Content from '../content/Content'
import poly from '../../../public/poly.png'

const MLR = () => {
  return (
    <Content
    title={"Polynomial Regression"}

    def={`Polynomial regression is an extension of linear regression where the relationship between the independent variable(s) and the dependent variable is modeled as an nth-degree polynomial instead of a straight line.`}

    features={`Linear regression models a straight-line relationship: Y = B0 +B1.X
      
      Polynomial regression allows the model to fit a curved relationship by introducing higher-degree terms of the predictors: Y = B0 + B1.X + B2.X^2 + B3.X^3 + ...
      
      When the relationship between the predictor and the target is not linear (i.e., a curve rather than a straight line). It helps capture more complex patterns in the data while still using a regression-based approach.`}

    img={poly}

    code={`from sklearn.linear_model import LinearRegression
    from sklearn.preprocessing import PolynomialFeatures

    poly = PolynomialFeatures(degree=2)
    X_poly = poly.fit_transform(X)

    model = LinearRegression()
    model.fit(X_poly, y)

    y_pred = model.predict(X_poly)
`}

    params={`>_ degree : Specifies the degree of the polynomial [Default = 2].
      
    >_ include_bias : Decides whether to include an intercept (bias) term (a column of ones) [Default: True].
      
    >_ interaction_only : If True, only interaction features (combinations of different features) are generated, without individual powers like X^2 [Default: False].`}

    uses={`>_ Non-linear Relationships : The relationship between variables is curved, not linear.
      
    >_ Curved Data Patterns : Your data shows a pattern like U-shaped or bell-shaped trends.`}

    adv={`<> Simple to Implement.
      <> Captures Non-Linear Relationships
      <> Flexibility : Allows fitting more complex patterns compared to simple linear regression.
      <> Improved Fit for Some Data : Can provide a better fit for data that shows polynomial trends (e.g., quadratic or cubic).`}
    
    disadv={`<> Sensitivity to Outliers.
      <> Increased Complexity : As the degree of the polynomial increases, the model becomes harder to interpret.
      <> Overfitting : With higher-degree polynomials, the model can fit noise in the data, making it too complex and reducing generalizability.
      <> Extrapolation Issues : The model can behave unpredictably outside the range of the training data, especially with high-degree polynomials.`}

      notuse={`>_ Many Outliers.
        >_ : If the relationship between variables is inherently linear.
        >_ When predicting outside the data range, polynomial regression can behave unpredictably and give unrealistic results.
        >_ If the degree of the polynomial is too high, the model may fit noise in the data, leading to poor generalization.`}
    />
  )
}

export default MLR