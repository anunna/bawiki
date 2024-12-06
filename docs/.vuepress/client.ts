import { onMounted } from 'vue'

export default {
    enhance({ app }) {
        if (typeof window !== 'undefined') {
            onMounted(() => {
                document.body.classList.add('fonts-loading')

                Promise.all([
                    document.fonts.load('1em Inter'),
                    document.fonts.load('1em JetBrains Mono')
                ]).then(() => {
                    document.body.classList.remove('fonts-loading')
                    document.body.classList.add('fonts-loaded')
                }).catch(() => {
                    document.body.classList.remove('fonts-loading')
                    document.body.classList.add('fonts-failed')
                })
            })
        }
    }
}

