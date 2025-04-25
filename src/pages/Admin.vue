<template>
  <q-page padding class="bg-grey-1">
    <q-card flat class="q-pa-md q-mb-lg">
      <div class="text-h5 text-bold text-pink-7">Painel Administrativo - My Kitchen</div>

      <q-form @submit="salvarProduto" class="q-gutter-md q-mt-md">
        <q-input v-model="novoProduto.titulo" label="Título do Produto" filled />
        <q-input v-model="novoProduto.descricao" label="Descrição" type="textarea" filled />

        <q-file
          v-model="novoProduto.imagem"
          label="Imagem do Produto"
          filled
          accept="image/*"
          @added="onFileSelected"
        />

        <q-btn label="Salvar Produto" color="pink-6" icon="save" type="submit" />
      </q-form>
    </q-card>
    <q-btn label="Home" color="pink-6" icon=" home" to="/"/>

    <q-card v-if="produtos.length" class="q-pa-md">
      <div class="text-h6 q-mb-md">Produtos Cadastrados</div>
      <div class="row q-col-gutter-md">
        <div v-for="(produto, index) in produtos" :key="index" class="col-xs-12 col-sm-6 col-md-4">
          <q-card flat bordered>
            <q-img :src="produto.imagem" :alt="produto.titulo" ratio="4/3" />

            <q-card-section>
              <div class="text-subtitle1">{{ produto.titulo }}</div>
              <div class="text-caption text-grey">{{ produto.descricao }}</div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn icon="delete" color="red" flat @click="removerProduto(index)" />
            </q-card-actions>
          </q-card>

        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const produtos = ref([])

const novoProduto = ref({
  titulo: '',
  descricao: '',
  imagem: ''
})

function onFileSelected(file) {
  const reader = new FileReader()
  reader.onload = () => {
    novoProduto.value.imagem = reader.result
  }
  reader.readAsDataURL(file)
}

function salvarProduto() {
  if (!novoProduto.value.titulo || !novoProduto.value.descricao || !novoProduto.value.imagem) {
    $q.notify({ type: 'negative', message: 'Preencha todos os campos!' })
    return
  }

  produtos.value.push({ ...novoProduto.value })
  $q.notify({ type: 'positive', message: 'Produto salvo com sucesso!' })

  // Resetar formulário
  novoProduto.value = {
    titulo: '',
    descricao: '',
    imagem: ''
  }
}

function removerProduto(index) {
  produtos.value.splice(index, 1)
  $q.notify({ type: 'info', message: 'Produto removido.' })
}
</script>
