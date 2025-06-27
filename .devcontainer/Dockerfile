# .devcontainer/Dockerfile
FROM mcr.microsoft.com/devcontainers/typescript-node:18

# Install common tools
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    zsh \
    git \
    curl \
    procps \
    sudo

# Install Github CLI
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && apt-get update \
    && apt-get install gh -y

# Install claude CLI
#RUN npm install -g @anthropic-ai/claude-cli

#RUN npm install -g @anthropic-ai/claude-code-alpha

# Set Zsh as the default shell
SHELL ["/bin/zsh", "-c"]