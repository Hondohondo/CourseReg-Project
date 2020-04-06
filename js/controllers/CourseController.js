'use strict';

courseApp.controller('CourseController',
  function CourseController ($scope) {

    $scope.course = {
      name: 'Angular Boot Camp',
      date: '7/7/2020',
      time: '1030am',
      location: {
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageUrl: '/img/angularjs.jpg',
      sessions: [
        {
          name: 'Directives Masterclass',
          creatorName: 'Bob Smith',
          duration: '1 hr',
          level: 'Advanced',
          abstract: 'In this session you will learn the ins and outs of directive',
          upVoteCount: 0
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'John Doe',
          duration: '30 mins',
          level: 'Introductory',
          abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you',
          upVoteCount: 0
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'Jane Doe',
          duration: '2 hours',
          level: 'Intermediate',
          abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbors',
          upVoteCount: 0
        }
      ]
    }

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };


  });