// html
// head
// head close
// body
 <div class="users-list-table">
   <div class="card">
      <div class="card-content">
         <div class="responsive-table">
            <table id="myTable" class="table striped bordered highlight responsive-table">
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Type</th>
                     <th>Image</th>
                     <th>Image Name <i>(For copy image name click anywhere in the block)</i></th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody id="image-name_container">
                  <% listData.forEach(function(data, index) { %>
                  <tr>
                     <td><%= parseInt(index+1) %></td>
                     <td><%= data.type == 1 ? "Featured Image" : data.type == 2 ? "Gallery Image" : data.type == 3 ? "Part Image" : "Certificate Image" %></td>
                     <% if(!data.image) {%>
                        <td><img src="<%= locals.brokenImage %> " height="150"></td>
                     <% } else {%>  
                     <% if(data.type == "1"){ %>
                        <td>
                           <img class="image__size-product-images" src="<%=imagePath.featured%><%= data.image %>" alt="img" />
                        </td>
                     <% } else if(data.type == "2") { %> 
                        <td>
                           <img class="image__size-product-images" src="<%=imagePath.additional%><%= data.image %>" alt="img" />
                        </td>
                     <% }else if(data.type == "3") { %> 
                        <td>
                           <img class="image__size-product-images" src="<%=imagePath.parts%><%= data.image %>" alt="img" />
                        </td>
                     <% } else { %> 
                         <td>
                            <img class="image__size-product-images" src="<%=imagePath.certificates%><%= data.image %>" alt="img" />
                         </td>
                      <% } %>
                     <% } %>  

                     <td class="image-name__content"><%= data.image %></td>
                     <td>
                        <!-- <a href="<%=nodeAdminUrl + editPath%>?action=view&id=<%= data.id %>"><i class="material-icons">remove_red_eye</i></a>&nbsp; -->
                        <a data-imgN href=""><i class="material-icons copy__name-btn">edit</i></a>
                        <a href="javascript:del('<%=nodeAdminUrl + editPath%>?action=delete&id=<%= data.id %>')"><i class="material-icons">delete</i></a>
                     </td>
                  </tr>
                  <% }); %>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</div>

<script>
function copyToClipboard() {
   const container = document.getElementById("image-name_container");
   let imageNames = container.querySelectorAll(".image-name__content");
   let copyButtons = document.querySelectorAll(".copy__name-btn");

   imageNames.forEach((val, i) => {
      copyButtons[i].dataset.imgN = val.innerHTML
   })

   for(cpyBtn of copyButtons){
      cpyBtn.addEventListener("click", (event) => {
         event.preventDefault()
         const textToCopy = event.target.dataset.imgN;

         const myTemporaryInputElement = document.createElement("input");
         myTemporaryInputElement.type = "text";
         myTemporaryInputElement.value = textToCopy;

         document.body.appendChild(myTemporaryInputElement);

         myTemporaryInputElement.select();
         document.execCommand("Copy");

         document.body.removeChild(myTemporaryInputElement);
      })
   }
}

copyToClipboard()
</script>
// body
// html
