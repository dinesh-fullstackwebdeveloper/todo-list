var parent = document.createElement('ul');
        document.getElementById('container').appendChild(parent);
        document.getElementById('sub').addEventListener('click', () => {
            var userinput = document.getElementById('source');
            if (userinput.value != "") {
                var child = document.createElement('li');
                child.textContent = userinput.value;
                parent.appendChild(child);
                var deletebutton = document.createElement('button');
                deletebutton.textContent = "Delete";
                deletebutton.setAttribute('id','del');
                var span = document.createElement('span');
                span.appendChild(deletebutton);
                child.appendChild(span);
                deletebutton.addEventListener('click',(event)=>{
                    var grandparent = event.target.parentElement;
                    grandparent.parentElement.remove();
                });
                userinput.value = null;
            }
            else{
                alert("Enter the tasks to add it on TODO LIST");
            }
        });
        document.getElementById('source').addEventListener('keypress',(event)=>{
            if(event.key =="Enter"){
                var userinput = document.getElementById('source');
            if (userinput.value != "") {
                var child = document.createElement('li');
                child.textContent = userinput.value;
                parent.appendChild(child);
                var deletebutton = document.createElement('button');
                deletebutton.textContent = "Delete";
                deletebutton.setAttribute('id','del');
                var span = document.createElement('span');
                span.appendChild(deletebutton);
                child.appendChild(span);
                deletebutton.addEventListener('click',(event)=>{
                    var grandparent = event.target.parentElement;
                    grandparent.parentElement.remove();
                });
                userinput.value = null;
            }
            else{
                alert("Enter the tasks to add it on TODO LIST");
            }   
            }   
        });
