import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="space-y-12">

      {/* About */}
      <section>
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-2xl">
        Hi, I'm Ryan and welcome to my website! I'm currently studying Computer Science at CSUF with a concentration in Cybersecurity. Through projects like building a Home SOC Lab, setting up an Active Directory environment, and running vulnerability management testing, I've gained hands-on experience with tools such as Oracle VirtualBox, PowerShell, Azure Services, KQL, VMware, and Nessus Essentials. Alongside my studies, I've always valued teamwork and perseverance which are qualities I built over 11 years of playing baseball. The lessons I learned on the field about discipline, communication, and working toward a common goal carry over into my approach to solving technical challenges and collaborating with others in the world of technology.
          <br /><br />
          My interests include helping others with technical issues, keeping users safe and secure, and exploring new technologies. Outside of tech, I enjoy staying active at the gym, surfing, and playing men's softball with friends. I also like cooking, watching movies, and reading.
        </p>
      </section>

      <div className="p-6 rounded-xl border border-gray-800 bg-neutral-900/50">
        <h3 className="text-xl font-semibold mb-3 text-center">Portfolio Highlights</h3>

        <div className="space-y-4 text-gray-300">
          <div className="space-y-2 [&>p]:text-sm [&>p]:text-gray-400">
            <h3 className="font-medium text-white underline">Home Server Lab</h3>

            <h3>Description:</h3>
            <p>Built a self-hosted infrastructure environment using Proxmox and a Raspberry Pi-based networking layer. The system simulates a production-like lab for virtualization, networking, and OS experimentation across multiple Linux distributions and containers.</p>
            
            <h3>Problem solved:</h3>
            <p>Lack of hands-on environment for virtualization, Linux systems, and networking experimentation on limited personal hardware.</p>
            
            <h3>Role:</h3>
            <p>Designed and configured full stack infrastructure including hypervisor, networking, and VM orchestration.</p>
            
            <h3>Tech Stack:</h3>
            <p>Proxmox, Linux (Kali, Ubuntu, LFS), Docker, LXC, Raspberry Pi 5, Pi-hole, Tailscale</p>
            
            <h3>What I learned:</h3>
            <p>Virtualization architecture, PCI passthrough, Linux networking, and system-level troubleshooting.</p>
          </div>

          <div className="space-y-2 [&>p]:text-sm [&>p]:text-gray-400">
            <h3 className="font-medium text-white underline">SOC Lab</h3>

            <h3>Description:</h3>
            <p>Built a cloud-based Security Operations Center simulation using Microsoft Sentinel and Log Analytics. The environment intentionally exposes a vulnerable Windows VM to generate security telemetry for monitoring and analysis.</p>

            <h3>Problem solved:</h3>
            <p>Lack of real-world exposure to SIEM workflows and threat detection pipelines.</p>
            
            <h3>Role:</h3>
            <p>Designed cloud infrastructure, configured logging pipeline, and integrated Sentinel for event detection.</p>
            
            <h3>Tech Stack:</h3>
            <p>Microsoft Azure, Microsoft Sentinel, Log Analytics Workspace, Windows 10 VM, KQL</p>
            
            <h3>What I learned:</h3>
            <p>SIEM workflows, KQL querying, log ingestion pipelines, and cloud security monitoring.</p>

          </div>

          <div className="space-y-2 [&>p]:text-sm [&>p]:text-gray-400">
            <h3 className="font-medium text-white underline">Pi Camera App</h3>
            
            <h3>Description:</h3>
            <p>Developed a mobile-controlled surveillance system using a Swift iOS app and a Raspberry Pi backend. The system enables real-time video streaming, hardware control, and motion detection over a secure VPN connection.</p>

            <h3>Problem solved:</h3>
            <p>Needed a secure, remote-accessible embedded surveillance system with real-time control.</p>
            
            <h3>Role:</h3>
            <p>Built full-stack system including iOS app, backend API, hardware integration, and secure networking layer.</p>
            
            <h3>Tech Stack:</h3>
            <p>Swift, Flask, Raspberry Pi 5, MJPEG streaming, Tailscale VPN</p>
            
            <h3>What I learned:</h3>
            <p>Mobile backend integration, REST API design, real-time streaming systems, and embedded hardware control.</p>

          </div>
        </div>
      </div>

      {/* Highlights */}
      <section className="grid md:grid-cols-2 gap-6">

      

        <div className="p-6 rounded-xl border border-gray-800 bg-neutral-900/50">
          <h3 className="text-xl font-semibold mb-3">Career</h3>
          <ul className="space-y-2 text-gray-300">
            <li>IT Technician Intern Role for Burgi Technologies</li>
            <li>Google IT Support Professional Certification - May 2025</li>
            <li><a className="text-gray-400 underline" href="https://www.fchornets.com/sports/bsb/2023-24/releases/20240501oroaju">2024 Season 2nd Team All-OEC honor at Fullerton College</a></li>
            <li>Operating an online storefront on eBay and BoardGameGeek, selling over 300 war/strategy board games while maintaining a track record of 100% positive customer feedback.</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl border border-gray-800 bg-neutral-900/50">
          <h3 className="text-xl font-semibold mb-3">Education</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Bachelor of Science: Computer Science - Cybersecurity Concentration from CSUF [August 2024 - December 2026]</li>
            <li>Associate of Arts: IDS Social Behavior and Self Development from Fullerton College [August 2022 - June 2024]</li>
            <li>Offensive Security Society at CSUF - Applied Independent Study through Workshops and Labs</li>
            <li>CompTIA A+, Security+, and Network+ Curriculum from Professor Messer</li>
          </ul>
        </div>

      </section>

      <section id="projects">
        <div className="space-y-8">
      
          <h1 className="text-3xl font-semibold">Projects</h1>
        
          <div className="grid md:grid-cols-4 gap-6">
            <ProjectCard title="Information Technology" href="https://github.com/stars/Ryan4012/lists/information-technology" variant="it" description={""} />
            <ProjectCard title="Cybersecurity" href="https://github.com/stars/Ryan4012/lists/cybersecurity" variant="cyber" description={""} />
            <ProjectCard title="Cloud" href="https://github.com/stars/Ryan4012/lists/cloud" variant="cloud" description={""} />
            <ProjectCard title="Software Dev" href="https://github.com/stars/Ryan4012/lists/software-development" variant="dev" description={""} />
          </div>
        </div>
      </section>
      

    </div>
    
  );
}
