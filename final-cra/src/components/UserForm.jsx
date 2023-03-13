const UserForm = ({method="GET", children, ...rest}) => {
  return <form method={method}>{children}</form>
}

export default UserForm;