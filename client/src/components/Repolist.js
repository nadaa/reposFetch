import  React,{Component} from 'react';
import Repo from './Repo';
import './Repolist.css';

const Repolist=({repos,onRepoSelect})=>{
	return (
		<div className='repos'>
		{repos.map((repo,i)=>{
			return (
				<Repo onRepoClick={onRepoSelect} key={i} repodetails={repo}/>
			)
		})}
		</div>

    )

}
	
export default Repolist;