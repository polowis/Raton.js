"use strict"

const fetch = require('node-fetch');
const Population = require('./population')

 class Nation extends Population{
    constructor(name, year = 2017){
        super(name, year)
        this.nation = {
            async getAllPopulation(){
                const population = await fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`)
                .then(response => response.json())
                .catch(err => console.log(err))
        
                console.log(population.data[0].Population)
                return population
            }
            
        }
        this.year = year;
    }
     async getAllPopulation(){
        const population = await fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`)
        .then(response => response.json())
        .catch(err => console.log(err))
        console.log(population.data[0].Population)
        return population
        
    }
    async getPopulationByName(){
        const population =  await this.set("Nation")
        .then(response => response.json())
        .catch(err => console.log(err))
        const info = population.data.find(pop => pop.State === this.name)
        return info

    }
    async getPopulationById(id){
        const population = this.set("Nation")
        .then(response => response.json())
        .catch(err => console.log(err))
        const info = population.data.find(pop => pop.ID_State === id)
        return info
    }
    
    
}




module.exports.Nation = Nation