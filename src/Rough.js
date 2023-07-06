<div className="instructions">
                  <h2>
                    Instructions to the candidates
                </h2>

                {storedValues.map((value, index) => (
                <p class="lines">
    <i class='bx bxs-right-arrow' key={index}></i>
   {value}
</p>
     ))}
            
         </div>