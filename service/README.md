# Serviço Windows - Hub de Sistemas Agro

Este diretório contém os scripts para transformar seu notebook em um **servidor web permanente** para o **Hub de Sistemas** na porta `5174`.

## 📋 Pré-requisitos

1. **Python** instalado e configurado no PATH
2. **Permissões de Administrador** para instalar o serviço
3. **NSSM (Non-Sucking Service Manager)** - Baixado automaticamente pelo script

---

## 🚀 Instalação Rápida (Passo a Passo)

### Passo 1: Instalar o serviço
1. Clique com o **botão direito** em `01_instalar_servico.bat`
2. Selecione **"Executar como administrador"**
3. O script irá compilar o aplicativo (`npm run build`), baixar o NSSM (se necessário) e registrar o serviço `HubSistemasAgro` no Windows.

### Passo 2: Acessar o Hub de Sistemas
- **Neste Notebook**: `http://localhost:5174`
- **Em outros computadores/celulares da mesma rede**: `http://<IP_DO_SEU_NOTEBOOK>:5174`

> 💡 **Como descobrir o IP do seu Notebook?**
> Abra o Prompt de Comando (`cmd`), digite `ipconfig` e procure pelo campo **Endereço IPv4** (ex: `172.16.253.34` ou `192.168.1.15`).

---

## 🎮 Scripts de Gerenciamento

| Arquivo | Função |
|---|---|
| `01_instalar_servico.bat` | Instala e inicia o serviço no Windows (executar como Admin) |
| `02_iniciar_servico.bat` | Inicia o serviço parado (executar como Admin) |
| `03_parar_servico.bat` | Para o serviço temporariamente (executar como Admin) |
| `04_reiniciar_servico.bat` | Recompila a aplicação e reinicia o serviço (executar como Admin) |
| `06_remover_servico.bat` | Remove o serviço do Windows (executar como Admin) |
| `07_status_servico.bat` | Verifica o status do serviço |

---

## ⚠️ Observações Importantes

- **Início Automático**: O serviço inicia automaticamente sempre que o notebook é ligado.
- **Logs de Erro/Saída**: Caso precise verificar a execução, os logs ficam salvos na pasta `service\logs\stdout.log` e `service\logs\stderr.log`.
- **Servidor HTTP**: O serviço executa o arquivo `server.py`, um servidor web Python nativo leve configurado para responder na porta `5174` para toda a rede local (`0.0.0.0:5174`).
