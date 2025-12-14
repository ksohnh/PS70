import React from 'react';

const Assignment10 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 10: Machine Building and End Effectors</h2>
      
      <p>The Telephone-Loop Plotter reimagines the childhood game of telephone through iterative, 
        mechanical drawing. Using a combination of stepper and servo motors mounted on a 3D-printed 
        frame, the plotter draws on an iPad surface. What's drawn is transmitted via a live server 
        connection—not through a camera—to a website interface, where the line data is reprocessed 
        into new motion commands. The result is a feedback loop: each drawing is redrawn, 
        reinterpreted, and slightly degraded over multiple cycles, echoing how messages evolve and 
        distort as they're passed along.
      </p>

      <h3>Initial Construction</h3>
      <p>We began by taking inventory of the available parts, which included rails, three servos, 
        and several 3D-printed mounting components. Using the various parts from the kit, we 
        constructed an initial apparatus that allowed for simple 2D movement across the railing—the 
        same baseline construction that every group had. This foundation provided the basic X and Y 
        axis motion necessary for the plotter to function.
      </p>

      <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
        <iframe
          src="https://www.youtube.com/embed/-XhtgWXwWJQ"
          title="X-axis motion"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            borderRadius: '8px'
          }}
        />
      </div>

      <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
        <iframe
          src="https://www.youtube.com/embed/o2Ki_xpkRjw"
          title="X and Y axis motion"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            borderRadius: '8px'
          }}
        />
      </div>

      <h3>End Effector Design</h3>
      <p>Our end effector uses a servo-controlled Apple Pencil mount for precise up-and-down motion. 
        While mechanically similar to a normal pen plotter, its novelty lies in drawing directly on 
        an iPad rather than paper, creating the digital–physical feedback loop that is central to 
        the project's concept. The servo motor provides the vertical motion needed to lift and lower 
        the Apple Pencil, allowing the plotter to draw continuous lines or move without marking the 
        surface.
      </p>

      <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
        <iframe
          src="https://www.youtube.com/embed/1FHGnH5b_gI"
          title="Servo for end effector"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            borderRadius: '8px'
          }}
        />
      </div>

      <h3>Homing Sequence</h3>
      <p>We developed a reliable homing system using limit switches for precise calibration. Two 
        switches are strategically placed to define the machine's zero position. Components trigger 
        the switches, allowing the plotter to reset accurately each time it powers on. We maintain 
        precise alignment between digital and physical coordinates by calibrating the top left and 
        bottom right of the canvas.
      </p>

      <p>We also coded an interactive settings menu on the iPad interface (similar to CNC mill 
        controls) that allows users to set reference points (top left, top right, etc.) and fine-tune 
        the origin position in small increments to precisely align with the iPad screen. The homing 
        system saves calibration data on the web interface between sessions, eliminating the need 
        to rehome on each startup.
      </p>

      <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
        <iframe
          src="https://www.youtube.com/embed/l308SvD5WA4"
          title="Homing one axis"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            borderRadius: '8px'
          }}
        />
      </div>

      <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
        <iframe
          src="https://www.youtube.com/embed/FT1-rDYsAK4"
          title="Homing both axis"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            borderRadius: '8px'
          }}
        />
      </div>

      <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
        <iframe
          src="https://www.youtube.com/embed/5BQX1-Gi6po"
          title="Homing to origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            borderRadius: '8px'
          }}
        />
      </div>

      <h3>Position Mapping</h3>
      <p>Our position mapping system translates digital drawing coordinates from the server into 
        precise motor movements on the plotter. Each command received through the WebSocket interface 
        is converted into corresponding X and Y step values, allowing the Apple Pencil to trace the 
        same path on the iPad surface. Because the machine is homed at startup, every position command 
        is mapped relative to a fixed physical origin, ensuring that the digital input and the 
        physical motion remain perfectly synchronized throughout each iterative "telephone-loop" pass.
      </p>

      <p>We initially tested the code with a pen and paper to guarantee proof-of-concept, and once 
        we were sure that the code was working to a certain extent, we replaced them with an iPad 
        and Apple Pencil.
      </p>

      <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
        <iframe
          src="https://www.youtube.com/embed/msF1RytKKVE"
          title="Paper and pencil test"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            borderRadius: '8px'
          }}
        />
      </div>

      <h3>Code Implementation</h3>
      <p>Our firmware, written for the ESP32 in Arduino, integrates Wi-Fi connectivity, WebSocket 
        communication, and stepper motor control to enable real-time drawing from a web interface. 
        The code hosts an HTML canvas page that streams coordinate data to the ESP32, which converts 
        pixel positions into precise motor steps and servo movements for pen up/down control. Limit 
        switches define homing positions for calibration, and all motion parameters—speed, 
        acceleration, and range—are tunable in software. This setup allows seamless digital-to-physical 
        translation of drawings while supporting iterative "telephone-loop" redrawing through 
        continuous server feedback.
      </p>

      <h3>Issues Solved Through Iterations</h3>
      
      <h4>Belt Tensioning & Motion Smoothness</h4>
      <p>We used zip ties and a 3D-printed tensioning clip to increase belt tension, and enabled 
        microstepping on the stepper motors to improve motion smoothness and reduce vibration. This 
        was crucial for achieving clean, precise lines on the iPad surface.
      </p>

      <h4>iPad Mounting System</h4>
      <p>Kieran CNC-milled a custom wooden mount for Theo's iPad to position it at the correct 
        height and alignment, ensuring consistent Apple Pencil contact with the drawing surface. 
        The custom mount not only solved the alignment issue but also looks great!
      </p>

      <h4>Limit Switches</h4>
      <p>We had some issues with the limit switches due to faulty wires. We replaced them, changed 
        the positioning of the limit switches, and soldered the connections for permanent 
        installation. This ensured reliable homing and calibration every time the machine started up.
      </p>

      <h3>Final Demonstrations</h3>
      <p>The completed plotter successfully demonstrates the telephone-loop concept, with drawings 
        being iteratively redrawn and reinterpreted through multiple cycles. The system maintains 
        precise synchronization between the digital interface and physical motion, creating a 
        seamless feedback loop.
      </p>

      <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
        <iframe
          src="https://www.youtube.com/embed/68NL08yOR-4"
          title="Final demonstration - Circle"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            borderRadius: '8px'
          }}
        />
      </div>

      <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
        <iframe
          src="https://www.youtube.com/embed/6Iterdpl_lc"
          title="Final demonstration - Spiral"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            borderRadius: '8px'
          }}
        />
      </div>

      <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
        <iframe
          src="https://www.youtube.com/embed/_GHZhbSnvcE"
          title="Slow run of final design"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            borderRadius: '8px'
          }}
        />
      </div>

      <div style={{ position: 'relative', paddingTop: '56.25%', margin: '2rem 0' }}>
        <iframe
          src="https://www.youtube.com/embed/9Jux6oXYT88"
          title="Multiple iteration run of final design"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            border: 0,
            borderRadius: '8px'
          }}
        />
      </div>
    </div>
  );
};

export default Assignment10;
