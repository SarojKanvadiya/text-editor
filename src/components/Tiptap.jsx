import React from 'react'
import { useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// define your extension array
const extensions = [StarterKit]

const content = '<p>Hello World!</p>'
const Tiptap = () => {
    const editor = useEditor({
        extensions,
        content,
      })
      if(!editor){
        return null
      }
  return (
    <div>
       <div>
       <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          Bold
        </button>
       </div>
       <div>
       <EditorContent editor={editor} />
       </div>
    </div>
  )
}

export default Tiptap
