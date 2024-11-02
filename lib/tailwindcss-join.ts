import plugin from 'tailwindcss/plugin'

export default plugin(({ addComponents }) => {
  addComponents({
    '.join': {
      '> :first-child:not(:last-child)': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
      },
      '> :last-child:not(:first-child)': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
      },
      '> :not(:first-child):not(:last-child)': {
        borderRadius: '0',
      },
      '> :where(*:not(:first-child))': {
        marginLeft: '-1px',
      },
      '> *:focus, > *:focus-within': {
        position: 'relative',
        zIndex: '2',
      },
      '> *:hover': {
        position: 'relative',
        zIndex: '1',
      },
    },
    '.join-vertical': {
      '> :first-child:not(:last-child)': {
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
      },
      '> :last-child:not(:first-child)': {
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
      },
      '> :not(:first-child):not(:last-child)': {
        borderRadius: '0',
      },
      '> :where(*:not(:first-child))': {
        marginTop: '-1px',
      },
    },
  })
})
