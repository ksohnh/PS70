import React from 'react';

const Assignment5 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 5: 3D Design & Printing</h2>
      
      <p>For this assignment, I designed and 3D-printed a Pokéball using Autodesk Fusion 360. The design 
        consists of multiple parts that press-fit together to create the iconic spherical shape with the 
        characteristic button and hinge mechanism.
      </p>

      <h3>Design Process</h3>
      <p>I used Autodesk Fusion 360 to create the 3D model of the Pokéball. The design process involved 
        creating the main spherical body split into two halves, along with the center button and any 
        necessary connection mechanisms. I focused on ensuring proper tolerances for the press-fit 
        assembly, which required careful consideration of the dimensions to allow the parts to snap 
        together securely without being too loose or too tight.
      </p>

      <img src={`${process.env.PUBLIC_URL}/pokeball_CAD_1.png`} width={500} alt="Pokéball CAD design view 1"></img>

      <p>The CAD model shows the overall structure and proportions of the Pokéball, maintaining the 
        classic design with the red top half, white bottom half, and black center band with button.
      </p>

      <img src={`${process.env.PUBLIC_URL}/pokeball_CAD_2.png`} width={500} alt="Pokéball CAD design view 2"></img>

      <p>This view demonstrates the internal structure and how the parts fit together, showing the 
        press-fit connections and ensuring proper alignment between components.
      </p>

      <img src={`${process.env.PUBLIC_URL}/pokeball_CAD_3.png`} width={500} alt="Pokéball CAD design view 3"></img>

      <p>The final CAD view shows the completed design ready for 3D printing, with all components 
        properly dimensioned and prepared for manufacturing.
      </p>

      <h3>3D Printing</h3>
      <p>The Pokéball was 3D-printed using white PLA (Polylactic Acid) material. PLA is an excellent 
        choice for this project due to its ease of printing, good surface finish, and sufficient 
        strength for a press-fit assembly. The white color provides a clean, classic look that matches 
        the traditional Pokéball design.
      </p>

      <p>After printing, the individual parts were assembled using a press-fit method, where the 
        components snap together through carefully designed tolerances. This approach eliminates the 
        need for adhesives or fasteners, creating a clean and functional assembly.
      </p>

      <img src={`${process.env.PUBLIC_URL}/pokeball_printed_1.jpg`} width={500} alt="3D-printed Pokéball view 1"></img>

      <p>The first printed result shows the completed Pokéball assembly, demonstrating how the press-fit 
        connections hold the parts together securely while maintaining the iconic spherical shape.
      </p>

      <img src={`${process.env.PUBLIC_URL}/pokeball_printed_2.jpg`} width={500} alt="3D-printed Pokéball view 2"></img>

      <p>This additional view showcases the quality of the print and the successful assembly, with 
        clean lines and proper fit between all components.
      </p>

      <h3>Design Considerations</h3>
      <p>One of the key challenges in this project was designing the press-fit tolerances correctly. 
        Too tight of a fit would make assembly difficult or risk breaking the parts, while too loose 
        would result in a wobbly or unstable assembly. Through careful dimensioning in Fusion 360 and 
        understanding the material properties of PLA, I was able to achieve a secure fit that allows 
        for easy assembly while maintaining structural integrity.
      </p>

      <h3>Results</h3>
      <p>The final 3D-printed Pokéball successfully demonstrates the capabilities of modern 3D design 
        and printing technology. The press-fit assembly method creates a clean, functional object 
        without visible fasteners or adhesives, resulting in a professional-looking finished product 
        that captures the essence of the classic Pokéball design.
      </p>
    </div>
  );
};

export default Assignment5;
