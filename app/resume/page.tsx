export default function Resume() {
    return (
      <div className="space-y-10 max-w-3xl">
  
        <h1 className="text-3xl font-semibold">Resume</h1>
  
        {/* Experience */}
        <section>
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">Experience</h2>
          <div className="mt-4">
            <p className="font-medium">IT Technician Intern</p>
            <ul className="list-disc ml-6 text-gray-400">
              <li>Configured workstations</li>
              <li>Performed diagnostics</li>
              <li>Apple device support</li>
            </ul>
          </div>
        </section>
  
        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">Education</h2>
          <p className="mt-2">CSUF - Computer Science</p>
        </section>
  
      </div>
    );
  }