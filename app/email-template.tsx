interface EmailTemplateProps {
  username: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
}) => (
  <div>
    <h1>Welcome, {username}!</h1>
  </div>
)
