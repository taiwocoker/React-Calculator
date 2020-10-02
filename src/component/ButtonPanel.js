import React from 'react';
import Button from './Button';

function ButtonPanel() {
    const Group1 = ['AC', '+/-', '%', '÷'];
    const Group2 = ['7', '8', '9', 'x'];
    const Group3 = ['4', '5', '6', '-'];
    const Group4 = ['1', '2', '3', '+'];
    const Group5 = ['0', '.', '='];

    const Groups = [Group1, Group2, Group3, Group4, Group5];
    
  return (
    <div>
        {Groups.map(group => (
           <div className="group" key={group}>
               {group.map(char => (
                   <Button key={char} buttonName={`${char}`} />
               ))}
           </div> 
        ))}
    </div>
  );
}

export default ButtonPanel;
