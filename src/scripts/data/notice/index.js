export const errorIcon = {
  size: 'sm',
  id: 'warning',
  title: 'An error occured'
};

export const successIcon = {
  size: 'sm',
  id: 'check',
  title: 'Action successful',
  classNames: ['mr--xs']
};

export const infoIcon = {
  size: 'sm',
  id: 'info',
  title: 'Inormation'
};

export const noticeProps = {
  id: 'notice',
  message: 'This is a default notice message.',
};

export const noticeErrorProps = {
  id: 'notice_error',
  state: 'error',
  icon: errorIcon,
  iconPosition: 'right',
  message: 'This is an error notice message.'
};

export const noticeSuccessProps = {
  id: 'notice_success',
  state: 'success',
  icon: successIcon,
  iconPosition: 'left',
  message: 'This is a success notice message.'
};

export const noticeWarnProps = {
  id: 'notice_warn',
  state: 'warn',
  icon: infoIcon,
  iconPosition: 'right',
  message: 'This is a warning notice message.'
};
