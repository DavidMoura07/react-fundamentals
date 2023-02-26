import './App.css'
import React from "react";
import First from './components/basics/First'
import WithParameters from "./components/basics/WithParameters";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/layout/Card";
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import StudentsList from './components/loop/StudentsList';
import ProductsTable from './components/loop/ProductsTable';
import PairOrOdd from './components/conditional/PairOrOdd';
import UserInfo from './components/conditional/UserInfo';
import DirectParent from './components/comunication/direct/Parent'
import IndirectParent from './components/comunication/indirect/Parent'
import Input from './components/form/Input';
import Counter from './components/counter/Counter';
import Mega from './components/mega/Mega';

const App = () => (
  <div className="App">
    <h1>React Fundamentals</h1>

    <div className="Cards">
      <Card title="#13 - Mega-Sena" bgColor="#2B2301">
        <Mega start={1} end={60} qtt={6}></Mega>
      </Card>

      <Card title="#12 - Counter" bgColor="#BCCF02">
        <Counter startNumber={10} steps={5}/>
      </Card>

      <Card title="#11 - Controlled Components (Input)" bgColor="#4298B5">
        <Input />
      </Card>

      <Card title="#10 - Indirect Comunication" bgColor="#354458">
        <IndirectParent />
      </Card>

      <Card title="#09 - Direct Comunication" bgColor="#75EB00">
        <DirectParent />
      </Card>

      <Card title="#08 - Conditional Rendering" bgColor="#DE4D4E">
        <PairOrOdd number={20}/>
        <UserInfo user={{ name: "David" }} />
        <UserInfo user={{ email: "david@email.com" }} />
      </Card>

      <Card title="#07 - Products Table" bgColor="#5E412F">
        <ProductsTable />
      </Card>

      <Card title="#06 - Loop" bgColor="#00C8F8">
        <StudentsList />
      </Card>

      <Card title="#05 - Component with Children" bgColor="#D0C91F">
        <Family familyName="Marques">
          <FamilyMember firstName="David" />
          <FamilyMember firstName="Andressa" />
          <FamilyMember firstName="Daniel" />
        </Family>
      </Card>

      <Card title="#04 - Random Challenge" bgColor="#69D2E7">
        <Random min={0} max={60}/>
      </Card>
      
      <Card title="#03 - Fragment" bgColor="#E94C6F">
        <Fragment />
      </Card>
      
      <Card title="#02 - With Parameters" bgColor="#DB3340">
        <WithParameters title='Second Component' subtitle='cool component' />
      </Card>
      
      <Card title="#01 - First Component" bgColor="#588C73">
        <First />
      </Card>
    </div>
    
  </div>
)
export default App