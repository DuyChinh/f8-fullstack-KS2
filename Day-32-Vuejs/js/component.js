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
                        this.data = objs.data();
                        // console.log(this.data);
                        add.querySelector(".title").textContent= this.data.title;
                        // add.querySelector(".count").textContent = this.data.count;
                        this.actionClick();
                    
                    }
                }
            }
            
            actionClick() {
                const countEL = add.querySelector(".count");
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
                        console.log(countEL.textContent);
                        if(countEL.textContent.indexOf("{") !== -1) {
                            const arrCount = countEL.textContent.split(/({{ count }})/);
                            console.log(arrCount);
                            arrCount[1] = this.data.count;
                            var renderString = arrCount.join("");
                            // console.log(renderString);
                            // console.log(arrCount.join(""));
                            countEL.innerText = renderString;
                        } else {
                            const arrCount = countEL.textContent.split(" ");
                            arrCount[2] = this.data.count;
                            var renderString = arrCount.join(" ");
                            countEL.innerText = renderString;
                        }
                        // renderString = "";
                        const titleEl = add.querySelector(".title");
                        titleEl.textContent = this.data.title;
                    });
                });
               
            }
      
        }
        
        customElements.define(name, Build);
    }
}