import { Component, OnInit } from '@angular/core';
import { Conversation } from '../core/model/conversation.interface';
import { Message } from '../core/model/message.interface';
import { MessageRole } from '../core/model/message-role.enum';
import { AuthUser } from '../core/model/auth-user.interface';
import { I18nService } from '../core/service/i18n.service';
import { environment } from '../../environments/environment';
import { ChatService } from './service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  standalone: false,
})
export class ChatComponent implements OnInit {
  readonly messageRole = MessageRole;
  readonly agentName = environment.agentName;
  readonly agentVersion = environment.chatAgentVersion;

  isSidebarOpen = false;

  constructor(
    public readonly i18n: I18nService,
    private readonly chatService: ChatService,
  ) {}

  ngOnInit(): void {
    this.chatService.initialize();
  }

  get currentUser(): AuthUser | null {
    return this.chatService.currentUser;
  }

  get conversations(): Conversation[] {
    return this.chatService.conversations;
  }

  get selectedConversationId(): string | null {
    return this.chatService.selectedConversationId;
  }

  get messages(): Message[] {
    return this.chatService.messages;
  }

  get chatListFilter(): string {
    return this.chatService.chatListFilter;
  }

  set chatListFilter(value: string) {
    this.chatService.chatListFilter = value;
  }

  get messageSearch(): string {
    return this.chatService.messageSearch;
  }

  set messageSearch(value: string) {
    this.chatService.messageSearch = value;
  }

  get draftMessage(): string {
    return this.chatService.draftMessage;
  }

  set draftMessage(value: string) {
    this.chatService.draftMessage = value;
  }

  get loadingConversations(): boolean {
    return this.chatService.loadingConversations;
  }

  get loadingMessages(): boolean {
    return this.chatService.loadingMessages;
  }

  get creatingConversation(): boolean {
    return this.chatService.creatingConversation;
  }

  get editingConversationId(): string | null {
    return this.chatService.editingConversationId;
  }

  get renameTitleDraft(): string {
    return this.chatService.renameTitleDraft;
  }

  set renameTitleDraft(value: string) {
    this.chatService.renameTitleDraft = value;
  }

  get renamingConversationId(): string | null {
    return this.chatService.renamingConversationId;
  }

  get archivingConversationId(): string | null {
    return this.chatService.archivingConversationId;
  }

  get sendingMessage(): boolean {
    return this.chatService.sendingMessage;
  }

  get errorMessage(): string | null {
    return this.chatService.errorMessage;
  }

  get filteredConversations(): Conversation[] {
    return this.chatService.filteredConversations;
  }

  get visibleMessages(): Message[] {
    return this.chatService.visibleMessages;
  }

  get displayUserName(): string {
    return this.currentUser?.displayName || this.i18n.t('chat.defaultUserName');
  }

  get userInitials(): string {
    const sourceName = this.displayUserName.trim();

    if (!sourceName) {
      return 'UU';
    }

    const parts = sourceName.split(/\s+/).slice(0, 2);
    return parts.map((part) => part[0]?.toUpperCase() || '').join('') || 'UU';
  }

  get emptyMessageText(): string {
    if (this.messageSearch.trim()) {
      return this.i18n.t('chat.noMessagesMatch');
    }

    return this.i18n.t('chat.startBySending', { agentName: this.agentName });
  }

  createConversation(): void {
    this.chatService.createConversation();
  }

  selectConversation(conversation: Conversation): void {
    this.chatService.selectConversation(conversation, () => {
      if (this.isMobileViewport()) {
        this.closeSidebar();
      }
    });
  }

  archiveConversation(conversation: Conversation, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.chatService.archiveConversation(conversation);
  }

  startRenameConversation(conversation: Conversation, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.chatService.startRenameConversation(conversation);
  }

  cancelRenameConversation(event?: MouseEvent): void {
    event?.preventDefault();
    event?.stopPropagation();
    this.chatService.cancelRenameConversation();
  }

  onRenameConversationKeyDown(event: KeyboardEvent, conversation: Conversation): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.saveRenameConversation(conversation);
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.cancelRenameConversation();
    }
  }

  saveRenameConversation(conversation: Conversation, event?: MouseEvent): void {
    event?.preventDefault();
    event?.stopPropagation();
    this.chatService.saveRenameConversation(conversation);
  }

  sendMessage(): void {
    this.chatService.sendMessage();
  }

  onComposerKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  openSidebar(): void {
    this.isSidebarOpen = true;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  logout(): void {
    this.chatService.logout();
  }

  trackByConversation(_index: number, conversation: Conversation): string {
    return conversation.conversationId;
  }

  trackByMessage(_index: number, message: Message): string {
    return message.messageId;
  }

  private isMobileViewport(): boolean {
    return window.matchMedia('(max-width: 767px)').matches;
  }
}
