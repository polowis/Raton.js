const fetch = require('node-fetch')
const nation = require('./nation')

class Population{
    constructor(id, name, year = 2017){

        this.id = id,
        /**
         * @property
         * @type {string}
         * @description {name of location}
         * @memberof Population
         */
        this.name = name 
        /**
         * @type {number}
         * @description year
         * @default {2017}
         *  
         */               
        this.year = year
        
        this.on() = async () => {
                const population = await fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`)
                .then(response => response.json())
                .catch(err => console.log(err))
        
                console.log(population.data[0].Population)
                return population
            
        }

        this.nation = {
            /**
             * @class Population
             * 
             * @return Population of nation at specific year
             */
            async getAllPopulation(){
                const population = await fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`)
                .then(response => response.json())
                .catch(err => console.log(err))
                console.log(population.data[0].Population)
                
            },
            
        }
        this.state = {
            /**
             * @class Population
             * @deprecated Will be remove in future
             * @return list of Population of all states
             */
            async getAllPopulation(){
                const population = await fetch(`https://datausa.io/api/data?drilldowns=State&measures=Population` )
                .then(response => response.json())
                .catch(err => console.log(err))
                
                //console.log(population.data[0])
                
            },
            /**
             * 
             * @param {object} location 
             * @return population of location
             */
            async getPopulationByName(location){
                const population =  await fetch(`https://datausa.io/api/data?drilldowns=State&measures=Population`)
                .then(response => response.json())
                .catch(err => console.log(err))
                const info = population.data.find(pop => pop.State === location)
                return info.Population
                
                
             
            },
            /**
             * 
             * @param {*} id 
             * @deprecated Will be removed in future
             */
            async getPopulationById(id){
                const population =  await fetch(`https://datausa.io/api/data?drilldowns=State&measures=Population`)
               // const population = await fetch(`https://datausa.io/api/data?drilldowns=State$measures=Population`)
                .then(response => response.json())
                .cacth(err => console.log(err))
                const info = population.data.find(pop => pop.IDState === id)
                return info
            }
        }
        this.County = {
            
            async getAllPopulation(){
                const population =  await fetch(`https://datausa.io/api/data?drilldowns=County&measures=Population`)
                .then(response => response.json())
                .catch(err => console.log(err))
                return population
            },
            async getPopulationByName(location){
                const population = await fetch(`https://datausa.io/api/data?drilldowns=County&measures=Population`)
                .then(response => response.json())
                .catch(err => console.log(err))
                const info = population.data.find(pop => pop.County === location)
                return info.Population
            }
        }
        this.place = {
            async getAllPopulationByName(location){
                const population = await fetch(`https://datausa.io/api/data?drilldowns=Place&measures=Population`)
                .then(response => response.json())
                .catch(err => console.log(err))
                const info = population.data.find(pop => pop.Place === location)
                return info

            }
        }
    }
    
    /**
     * 
     * @param {*} header 
     * @typedef string
     */
    
    get set(){
        if(typeof header !== "string"){
            return false
        }
        const result = fetch(`https://datausa.io/api/data?drilldown=${header}&measures=Population`)
    }
}
module.exports = Population