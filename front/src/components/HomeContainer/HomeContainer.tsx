import React from 'react'
import Cards from '../Cards/Cards'
import Panel from "@/components/Panel/Panel";
import Benefits from "@/components/Benefits/Benefits";
import ContainerCategory from "@/components/ContainerCategory/ContainerCategory";


const HomeContainer = () => {
  return (
    <div>
      <Panel/>
      <Benefits/>
      <ContainerCategory/>
      <Cards />
      
    </div>
  )
}

export default HomeContainer
