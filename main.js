"use strict";

// This code sets up the parser for you
const Parser = require("./parser");
const p = new Parser("data.json");
// Do not change this!!!

/*
 * This function gets the next object from the parser, every time you call it, it will return a new entry
 * it is deliberately commented out, for now, you must find out where to use it.
 *
 * To get all items from the parser you will need to write a loop.
*/

// let obj = p.getNextObject();

/*
 * Task 1
 * Although simple objects will be coming back from the database you are required to write a class
 * the class should have a method to find out if the person can vote.
*/

/*
 * Task 2
 * Using the class you wrote, write a method called 'canSpeak' which takes a language, as a string eg: canSpeak('Spanish') and returns true or false
*/

/*
 * Task 3
 * Using the class you wrote, add a method called 'highestQualification' which takes no parameters, and simply returns the highest qualification they have
 * eg: gsce, bsc, ma, PhD etc
*/

/*
 * Task 4
 * In the event of an accident, we need to know if any of these individuals are doctors, write a method called 'isDoctor' that takes an optional parameter (medical, default false)
 * It returns true/false if the person has a PhD, and the optional value is false
 * It returns true/false if the person has a PhD and it is a medical degree.
*/

/*
 * Task 5
 * Why did we use default parameters in the previous example?
*/
