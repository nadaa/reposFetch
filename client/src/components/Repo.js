import  React,{Component} from 'react';
import './Repo.css';

const Repo=({repodetails,onRepoClick})=>{
	return(
	 <div className='repo' title='Click to add/remove the bookmark' onClick={()=>onRepoClick(repodetails)}>
		 <p>Id:{repodetails.id}</p>
		 <p>Name:{repodetails.name}</p>
     </div>
	)
}

export default Repo;