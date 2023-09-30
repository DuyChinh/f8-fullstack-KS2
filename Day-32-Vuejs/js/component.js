var add = document.querySelector(".add");
class F8 {
    static component (name, objs) {
        
        class Build extends HTMLElement {
            constructor() {
                super();
                const template = objs.template;
                if(template) {
                    const templateEL = document.createElement("template");
                    templateEL.innerHTML = template;
                    add.append(templateEL.content.cloneNode(true));
                    // console.log(add);
                    if(name === "counter-app") {
                        // console.log(this);
                        this.data = objs.data();
                        // console.log(this.data);
                        add.querySelector("h2").textContent= this.data.title;
                        // const countEL = add.querySelector(".count");
                        this.handleString();
                        this.actionClick();
                    
                    }
                }
            }
            
            actionClick() {
                const countEL = add.querySelector("h3");
                const btns = add.querySelectorAll("button");
                // console.log(btns);
                const regex = /v-on:(\w+)="(\w+.*?)"/;
                btns.forEach((btn) => {
                    const value = btn.outerHTML.match(regex)[2];
                    const eventEL = btn.getAttributeNames()[0];
                    const pos = eventEL.indexOf(":");
                    const event = eventEL.slice(pos+1);
                    // console.log(event);
                    btn.addEventListener(event, () => {
                        eval(`this.data.` + value);
                        // const countEL = add.querySelector(".count");
                        // console.log(countEL);
                        // console.log(countEL.textContent);
                        if(countEL.textContent.indexOf("{") !== -1) {
                            this.handleString();
                        } else {
                            const arrCount = countEL.textContent.split(" ");
                            arrCount[2] = this.data.count;
                            var renderString = arrCount.join(" ");
                            countEL.innerText = renderString;
                        }
                        // renderString = "";
                        const titleEl = add.querySelector("h2");
                        titleEl.textContent = this.data.title;
                    });
                });
               
            }

            handleString() {
                const countEL = add.querySelector("h3");
                const arrCount = countEL.textContent.split(/({{ count }})/);
                arrCount[1] = this.data.count;
                var renderString = arrCount.join("");
                countEL.innerText = renderString;
            }
      
        }
        
        customElements.define(name, Build);
    }
}