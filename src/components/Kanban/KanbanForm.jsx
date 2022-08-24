function KanbanForm() {
  return (
    <>
      <div
        className="modal fade task-modal-content"
        id="add-new-task-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="NewTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="NewTaskModalLabel">
                Create New Task
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form className="p-2">
                <div className="mb-3">
                  <label className="form-label">Project</label>
                  <select className="form-select form-control-light">
                    <option>Select</option>
                    <option>Hyper - Admin Dashboard</option>
                    <option>CRM - Design &amp; Development</option>
                    <option>iOS - App Design</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label htmlFor="task-title" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-light"
                        id="task-title"
                        placeholder="Enter title"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="task-priority2" className="form-label">
                        Priority
                      </label>
                      <select
                        className="form-select form-control-light"
                        id="task-priority2"
                      >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="task-description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control form-control-light"
                    id="task-description"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="task-title" className="form-label">
                        Assign To
                      </label>
                      <select
                        className="form-select form-control-light"
                        id="task-priority"
                      >
                        <option>Coderthemes</option>
                        <option>Robert Carlile</option>
                        <option>Louis Allen</option>
                        <option>Sean White</option>
                        <option>Riley Steele</option>
                        <option>Zak Turnbull</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="task-priority" className="form-label">
                        Due Date
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-light"
                        id="birthdatepicker"
                        data-toggle="date-picker"
                        data-single-date-picker="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
}

export default KanbanForm;
