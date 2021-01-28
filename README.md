# COVID-19 World
`COVID-19 World` is a ReactJS project built to study and improve my React skills.

# See it Running

`COVID-19 World` app is running as a website hosted on Azure.

👉 [https://covid19.azurewebsites.net/](https://covid19.azurewebsites.net/)

## Home Page [🔗](https://covid19.azurewebsites.net)

`Home` page provides the statistics on the data from country `Italy`

- Total Number of Confirmed Cases
- Total Number of Active Cases
- Total Number of Recoverd Cases
- Total Number of Deaths
- Trends 
    - Number of New Cases Found per Day
    - New Cases Trends - % Changes Per day
    - Trends Change of Confirmed vs Active vs Recovered vs Deaths

## World Page [🔗](https://covid19.azurewebsites.net/world)

`World` page provides the rich features and stats about the Countries affected by the virus:

- Compare Countries over the Weeks: Compare the Spreads by Selecting the Countries of your choice. The selection also gets persisted into the localstorage of the browser so that, you can montor those over times.
- Countries with Overall Death Impact
- Countries Recovering Well
- Total Cases and Splits
- Countries with maximum Deaths Today
- Major Country Spreads

## Countries Page [🔗](https://covid19.azurewebsites.net/countries)

`Countries` page list down all the countries affected by the Virus today. This page allows to:

- Find a Specific Country by type-down search.
- Select a Country to drill down on the details.
- Sort the Countries based on, total cases, active cases, deaths and recovery.

# To Run from the Source

`COVID-19 World` is a ReactJS based project uses API from various sources to visualize and analyse the data to represent in most useful manner. Once you clone/fork the repo, you should be able to run it locally.

Make sure, you have NodeJS installed. Preffered Version of nodeJs is >12.x.x

With NPM, Do the followings:

- `npm install`: Install the Projcect Dependencies
- `npm run start`: Start the app in dev mode. The app will be available on [https://localhost:4000](https://localhost:4000)
- `npm run build`: Build the app for production.

# Technologies

This app is built from the scratch using following User Interface Technologies:

- [ReactJs](https://reactjs.org/)
- [Bootstrap](https://react-bootstrap.netlify.com/)
- [Recharts](http://recharts.org/en-US/)
- [Azure](https://azure.microsoft.com)