Rails.application.routes.draw do
  devise_for :users
  root 'welcome#home'

  resources :items
  post 'items/:id/vote', to: 'items#vote'

end
