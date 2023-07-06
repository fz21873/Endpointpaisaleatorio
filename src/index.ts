import { Request, Response } from 'express';
import { app } from './app';

import { getRadomCountries } from './countries/endpoints/getRandomCountries';
//countries
app.get("/countries/random", getRadomCountries)







