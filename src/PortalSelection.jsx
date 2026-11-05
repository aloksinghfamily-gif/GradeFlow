
function PortalSelection() {
  return (
    <div className="selection-page">


      {/* Header */}
      <header className="portal-header">
        <h1>GradeFlow</h1>
        <h2>Welcome Portal Selection</h2>
      </header>


      <h1>Welcome to GradeFlow</h1>
      <p>How would you like to use GradeFlow?</p>

      {/* Institute */}
      <div className="role-card">
        <h2>Institute</h2>
        <p>For schools, colleges and institutions.</p>
        <button>Continue as institute </button>
      </div>

        {/* Individual Teacher */}
      <div className="role-card">
        <h2>Individual Teacher</h2>
        <p>Manage your classes and students.</p>
        <button>Continue as teacher </button>
      </div>

          {/* Student */}
      <div className="role-card">
        <h2>Student Login</h2>
        <p>Access your learning dashboard.</p>
        <button>Login as student </button>
      </div>

       {/* AI Chatbox */}
      <button className="chatbox" onClick={() => alert("AI Chatbox is under development.")}>
        AI Chatbox
      </button>
    </div>

  );
}

export default PortalSelection;
