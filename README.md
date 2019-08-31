# cookie-stand/ Pat Cookies Daily Production
As a developer, I want to implement a constructor function, so that I can reuse code and eliminate much of the duplication in my JavaScript. 
As a user, I want to model my projected sales data as accurately as possible. Research into Pat’s customer traffic has shown that the hours of 8am, 11am, and 3pm tend to have more customers than other hours, and that the hours with the least customers are 1pm and 6pm. Apply a control curve to the projected sales numbers to reflect those daily ebbs and flows. The following array represents the percentage of maximum traffic that occurs during each of the hours from 6am to 8pm, and can be used to scale the projected hourly customer traffic into more accurate values:
[0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6]