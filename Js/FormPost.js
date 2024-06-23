export class FormPost{
    constructor(idForm, idTextarea, idUlPost){
        this.form = document.getElementById(idForm)
        this.textarea = document.getElementById(idTextarea)
        this.ulPost = document.getElementById(idUlPost)
        this.addSubmit();
    }

    onSubmit(func){
    this.form.addEventListener("submit",func);
    }

    formValidate(value){
        if(
            value == "" ||
            value === null ||
            value === undefined ||
            value.length < 3
        )
        {
            return false;
        }
        return true
    }

    getTime(){
        const time = new Date();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        return `${hour}h ${minutes}min`;
    }

    addSubmit(){
        const handleSubmit = (event) => {
            event.preventDefault();
            if(this.formValidate(this.textarea)){
                const newPost = document.createElement("li");
                newPost.classList.add("post");
                const time = this.getTime();
                newPost.innerHTML = `
                <div class="info_user_post">
                    <div class="img_user_post"></div>
                    <div class="name_and_hour">
                        <strong>Ismael Pereira Aguillar</strong>
                        <p>${time}</p>
                    </div>
                </div>

                <p>
                ${this.textarea.value}
                </p>
                                
                <div class="action_btn_post">
                    <button type="button" class="files_post like"><img src="images/coracao.png" alt="Curtir" style="width: 100%; height:16px; filter: invert()">Curtir</button>
                    <button type="button" class="files_post comment"><img src="images/comente.png" alt="Comentar" style="width: 100%; height: 16px; filter: invert()">Comentar</button>
                    <button type="button" class="files_post share"><img src="images/compartilhar.png" alt="Compartilhar" style="width: 100%; height: 16px; filter: invert()">Compartilhar</button>
                </div>
                `;
                this.ulPost.appendChild(newPost);
                this.textarea.value = "";
            }
            else{
                alert("Algum Erro!!");
            }
        };

        this.onSubmit(handleSubmit);
    }

}
const postForm =  new FormPost('form_post', 'textarea', 'posts');