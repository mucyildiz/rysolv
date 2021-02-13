const alterUserQuestionResponseTable = `
  ALTER TABLE user_question_responses
  ADD COLUMN created_date TIMESTAMP,
  ADD COLUMN priority INT,
  ADD COLUMN question_id REFERENCES questions(id),
  ADD COLUMN response_id REFERENCES question_responses(id),
  ADD COLUMN response_key VARCHAR(32),
  ADD COLUMN user_id REFERENCES users(id),
  ADD COLUMN value TEXT
`;

const createUserQuestionResponseTable = `
  CREATE TABLE IF NOT EXISTS user_question_responses(
    id UUID PRIMARY KEY
  )
`;

module.exports = {
  alterUserQuestionResponseTable,
  createUserQuestionResponseTable,
};
