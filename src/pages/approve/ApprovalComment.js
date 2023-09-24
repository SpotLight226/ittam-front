function ApprovalComment({ info }) {
  return (
    <div className="modal-dialog modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">상세내용</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <span>제목:</span>
          <input
            className="modal-body"
            style={{
              border: '0 solid black',
              outline: 'none',
              marginLeft: '30px',
            }}
            value={info ? info.appro_title : ''}
            readOnly
          />

          <div className="row mb-3">
            <label htmlFor="appro_comment" className="col-sm-2 col-form-label">
              내용:
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                style={{ height: '100px' }}
                value={info ? info.appro_comment : ''}
                readOnly
              ></textarea>
            </div>
          </div>
          <br />
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApprovalComment;
