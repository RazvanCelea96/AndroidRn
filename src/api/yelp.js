import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer XURqpoEln-TJJ7uJJqjN9WvM_5F5IPGKcQSx0CA37qC44z8w11bItuDDKRTwlXoMQO0EHbvPqI110cbD0ulRGPZufeqEMqojjF9DJLYiINWLgoeNQm68SJO3UkJeX3Yx'
    }
});

