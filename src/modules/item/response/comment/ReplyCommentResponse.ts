
export interface SuccItem {
  /**
   * The identity of comment.
   */
  cmt_id: Number,

}

export interface ReplyError {
  /**
   * The identity of comment.
   */
  cmt_id: Number,
  /**
   * Error message description.
   */
  error_msg: String,
}

export default interface ReplyCommentResponse {
  /**
   * The identifier for an API request for error tracking
   */
  request_id: String,
  /**
   * list of success reply
   */
  succ_list: SuccItem[],
  /**
   * list of failed reply
   */
  errors: ReplyError[],
}