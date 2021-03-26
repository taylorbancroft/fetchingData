import React from 'react'

const List = (props) => {
const {repos} = props;      //this is initializing a prop for the component called repos
    if (!repos || repos.length == 0){   //making a conditional statement that will render a message
                                        //when the length of the repos we get from the request we
                                        //make is equal to 0.
        return <p>No repos, sorry</p>;
    }   
    return(                 //Here we are mapping through each repo and extracting each of the
                            //repo names and descriptions and displaying them in a list
        <ul>
            <h2 className='list-head'>Available Public Repositories</h2>
            {repos.map((repo) => {
                return(
                    <li key={repo.id} className='list'>
                        <span className='repo-text'>{repo.name}</span>
                        <span className='repo-description'>{repo.description}</span>
                    </li>
                );
            })}
        </ul>
    );
};
export default List;
