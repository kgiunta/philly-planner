import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($name: String!, $email: String!, $password: String!) {
    login(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_OUTING = gql`
  mutation addOuting($dateTime: String!, $outingName: String!, $outingCreator: String!) {
    addOuting(outingName: $outingName, dateTime: $dateTime, outingCreator: $outingCreator) {
      _id
      dateTime
      outingName
      outingCreator
      createdAt
      restaurants {
        _id
        restaurantName
        restaurantURL
        restaurantLocation
      }
    }
  }
`;

export const ADD_RESTAURANT = gql`
  mutation addRestaurant($outingId: ID!, $restaurantName: String!, $restaurantURL: String, $restaurantLocation: String) {
    addRestaurant(outingId: $outingId, restaurantName: $restaurantName, restaurantURL: $restaurantURL, restaurantLocation: $restaurantLocation) {
      _id
      dateTime
      outingName
      outingCreator
      createdAt
      restaurants {
        _id
        restaurantName
        restaurantURL
        restaurantLocation
      }
    }
  }
`;


